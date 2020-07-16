package project_backend.org.controller;

import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @RequestMapping("/login")
    public Msg login(@RequestBody Map<String,String>map){
        String name=map.get("username");
        String password=map.get("password");
        User auth = userService.checkUser(name, password);
        if(auth!=null){
            JSONObject obj=new JSONObject();
            obj.put("id",auth.getId());
            obj.put("name",auth.getName());
            obj.put("email",auth.getEmail());
            obj.put("isAuth",auth.getIs_auth());
            SessionUtil.setSession(obj);
            JSONObject data=JSONObject.fromObject(auth);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.LOGIN_SUCCESS_MSG,data);
        }else{
            return MsgUtil.makeMsg(MsgUtil.LOGIN_USER_ERROR,MsgUtil.LOGIN_USER_ERROR_MSG);
        }
    }
//    @RequestMapping("/checkSession")
//    public Msg checkSession(){
//        JSONObject auth = SessionUtil.getAuth();
//
//        if(auth == null){
//            return MsgUtil.makeMsg(MsgUtil.NOT_LOGGED_IN_ERROR,MsgUtil.NOT_LOGGED_IN_ERROR_MSG);
//        }
//        else{
//            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.LOGIN_SUCCESS_MSG,auth);
//        }
//    }
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
            user.setName(name);
            user.setPassword(password);
            user.setEmail(email);
            user.setIs_auth(Boolean.FALSE);
            userService.addUser(user);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.REGISTER_SUCCESS_MSG);
        }else{
            return MsgUtil.makeMsg(MsgUtil.REGISTER_ERROR,MsgUtil.REGISTER_ERROR_MSG);
        }
    }
}
