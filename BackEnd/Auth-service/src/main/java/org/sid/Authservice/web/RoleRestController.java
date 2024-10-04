package org.sid.Authservice.web;

import lombok.AllArgsConstructor;
import org.sid.Authservice.entities.Role;
import org.sid.Authservice.service.RoleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class RoleRestController {
    private RoleService roleService;

     @GetMapping("/Allroles")
    public List<Role> roles(){
         return roleService.allRoles();
     }
}
