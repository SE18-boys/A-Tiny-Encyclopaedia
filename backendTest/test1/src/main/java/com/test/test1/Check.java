package com.test.test1;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
public class Check {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

}
