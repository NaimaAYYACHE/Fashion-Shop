package org.sid.Authservice.web;

import lombok.AllArgsConstructor;
import org.sid.Authservice.entities.User;
import org.sid.Authservice.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class UserRestController {
    private UserService userService ;

    @GetMapping("/AllUsers")
    public Page<User>  getUsers(@RequestParam(defaultValue = "0") int page ,
                                @RequestParam(defaultValue = "4") int size ,
                                @RequestParam(defaultValue = "") String keyword){
        return userService.getPageUsers(PageRequest.of(page , size) , keyword);
    }

    @GetMapping("UserById/{id}")
    public User userById(@PathVariable Long id){
        return userService.userById(id);
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User u){
        return userService.addUser(u);
    }


    @PutMapping("/updateUser/{id}")
    public User updateUser(@PathVariable Long id ,@RequestBody User user){
        return userService.updateUser(id,user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id){
         userService.delete(id);
    }

}
