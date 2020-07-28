package project_backend.org.entity;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;
@Entity
@Table(name ="user",schema ="encyclopaedia")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class User {
    private Integer id;
    private String username;
    private String password;
    private String email;
    private Boolean isAuth;
    private String role;

    public User(){
        super();
    }

    @Id
    @GeneratedValue(generator = "increment",strategy = IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getUsername(){return this.username;}
    public void setUsername(String name){this.username =name;}

    @Basic
    @Column(name = "password")
    public String getPassword(){return this.password;}

    public void setPassword(String password){this.password=password;}

    @Basic
    @Column(name = "email")
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email=email;
    }

    @Basic
    @Column(name = "isAuth")
    public Boolean getIs_auth(){
        return this.isAuth;
    }
    public void setIs_auth(Boolean is_auth){
        this.isAuth=is_auth;
    }

    @Basic
    @Column(name = "role")
    public String getRole() { return  this.role; }
    public void setRole(String role) { this.role = role; }


}
