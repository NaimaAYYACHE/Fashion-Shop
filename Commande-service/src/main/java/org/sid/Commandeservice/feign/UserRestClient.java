package org.sid.Commandeservice.feign;

import org.sid.Commandeservice.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "Auth-service" , url ="http://localhost:9999/Auth-service")
public interface UserRestClient {
    @GetMapping("/users/{id}?projection=fullUser")
    public User getUserById(@PathVariable Long id );

    @GetMapping("/users?projection=fullUser")
    public PagedModel<User> getUsers();

}
