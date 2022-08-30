package roelena.shop;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {

    private final UserDao userDao;

    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("")
    public ModelAndView login(){
        return new ModelAndView("/src/main/resources/signin.html");
    }
    @GetMapping("/add")
    public ModelAndView register(){

        return new ModelAndView("/src/main/resources/signup.html");
    }



    @PostMapping("/register-action")

    public ModelAndView registerAction(@RequestParam("email") String email,
                                       @RequestParam("password") String password,
                                       @RequestParam("name") String name,
                                       @RequestParam("number") int number){
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setName(name);
        user.setNumber(number);

        userDao.save(user);
        return new ModelAndView(("redirect:/"));
    }

}
