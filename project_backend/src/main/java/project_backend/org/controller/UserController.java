package project_backend.org.controller;

import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project_backend.org.service.UserService;
import project_backend.org.entity.User;
import project_backend.org.utils.msgutils.Msg;
import project_backend.org.utils.msgutils.MsgUtil;
import project_backend.org.utils.sessionutils.SessionUtil;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/loginmessage")
    public Msg login(@RequestBody Map<String,String>map){
        String name=map.get("username");
        String password=map.get("password");
        System.out.println(name);
        System.out.println(password);
        User auth = userService.checkUser(name, password);
        if(auth!=null){
            JSONObject obj=new JSONObject();
            obj.put("id",auth.getId());
            obj.put("name",auth.getUsername());
            obj.put("email",auth.getEmail());
            obj.put("role",auth.getRole());
            SessionUtil.setSession(obj);
            JSONObject data=JSONObject.fromObject(auth);
            Logger logger = Logger.getLogger(UserController.class);
            logger.info("Path:loginmessage,status:access!"+"username:"+name+"\t"+"role:"+auth.getRole());
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.LOGIN_SUCCESS_MSG,data);
        }else{
            Logger logger = Logger.getLogger(UserController.class);
            logger.error("Path:loginmessage,status:fail!"+"username:"+name+"\t"+"password:"+password);
            return MsgUtil.makeMsg(MsgUtil.LOGIN_USER_ERROR,MsgUtil.LOGIN_USER_ERROR_MSG);
        }
    }
    @RequestMapping("/getUsers")
    public List<User> getUsers(){return userService.getUsers();}

    @RequestMapping("/register")
    public Msg register(@RequestBody JSONObject object){
        String name= object.getString("username");
        String password=object.getString("password");
        String email=object.getString("email");
        User auth=userService.findUserByName(name);
        if(auth==null){
            User user=new User();
            user.setUsername(name);
            user.setPassword(password);
            user.setEmail(email);
            user.setRole("ROLE_USER");
            userService.addUser(user);
            Logger logger = Logger.getLogger(UserController.class);
            logger.info("Path:register,status:access!"+"username:"+name+"\t"+"email:"+email);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.REGISTER_SUCCESS_MSG);
        }else{
            Logger logger = Logger.getLogger(UserController.class);
            logger.error("Path:register,status:fail!"+"username:"+name+"\t"+"email:"+email);
            return MsgUtil.makeMsg(MsgUtil.REGISTER_ERROR,MsgUtil.REGISTER_ERROR_MSG);
        }
    }
}
