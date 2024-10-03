package org.sid.Authservice.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullRole" , types = Role.class)
public interface RoleProjection {
    Long getId();
    String getName();
}
