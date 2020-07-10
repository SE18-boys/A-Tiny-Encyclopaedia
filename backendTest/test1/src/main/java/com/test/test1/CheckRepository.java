package com.test.test1;

import org.springframework.data.repository.CrudRepository;

public interface CheckRepository extends CrudRepository<Check, Long> {
    Check findByName(String name);
}
