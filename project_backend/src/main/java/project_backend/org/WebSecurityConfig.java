package project_backend.org;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import project_backend.org.interceptor.Http403ForbiddenEntryPoint;
import project_backend.org.interceptor.LoginFailureHandler;
import project_backend.org.interceptor.LoginSuccessHandler;
import project_backend.org.interceptor.LogoutHandler;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private LoginSuccessHandler loginSuccessHandler;

    @Autowired
    private LoginFailureHandler loginFailureHandler;

    @Autowired
    private LogoutHandler logoutHandler;

    @Autowired
    private Http403ForbiddenEntryPoint http403ForbiddenEntryPoint;

//    @Qualifier("userService")
//    @Bean
//    public UserDetailsService userDetailsService() {
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//        manager.createUser(User.withUsername("YouYu").password("123").authorities("test").build());
//        manager.createUser(User.withUsername("YiMei").password("456").authorities("test").build());
//        return manager;
//    }


    @Qualifier("userServiceImpl")
    @Autowired
    private UserDetailsService userDetailsService;

    //密码编码器
    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(http403ForbiddenEntryPoint)
                .and()
                .authorizeRequests()
                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() //浏览器预请求
                    .antMatchers("/DiseaseByName").permitAll()//所有匹配 "/DiseaseByName" 的请求放行
                    .antMatchers("/DiseaseByAccurateName").permitAll()
                    .antMatchers("/loginmessage").permitAll()
                    .antMatchers("/getUsers").hasRole("ADMIN")
                    .antMatchers("/AddDisease").hasRole("ADMIN")
                    .antMatchers("/UpdateDisease").hasRole("ADMIN")
                    .antMatchers("/SetAuditResult").hasRole("ADMIN")
                    .antMatchers("/DiseaseAuditByName").hasRole("ADMIN")
                    .antMatchers("/DiseaseUnauditByName").hasRole("ADMIN")
                    .antMatchers("/AllDiseaseUnaudit").hasRole("ADMIN")
                    .antMatchers("/AllDiseaseApproved").hasRole("ADMIN")
                    .antMatchers("/AllDiseaseDisapproving").hasRole("ADMIN")
                    .antMatchers("/register").permitAll()
                    .anyRequest().authenticated() //其余所有请求需要认证.authenticated()
                    .and()
                .formLogin()
                    .usernameParameter("username")
                    .passwordParameter("password")
                    .loginProcessingUrl("/login")
                    .successHandler(loginSuccessHandler)
                    .failureHandler(loginFailureHandler)
                    .permitAll()
                    .and()
                .logout()
                    .logoutUrl("/logout")
                    .logoutSuccessHandler(logoutHandler)
                    .permitAll();
    }

}
