package com.app.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Document
@Data
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotBlank
    @NotNull
    private String cpf;

    @NotBlank
    @NotNull
    private String cnpj;


    private String urlPhoto;

    @NotBlank
    @NotNull
    private String name;

    @NotNull
    private String senha;

    @Email
    @NotBlank
    @NotNull
    private String email;

    @NotNull
    private String username;

    @DBRef
    private Set<Role> roles = new HashSet<>();

    @DBRef
    List<Company> companyList = new ArrayList<>();

    public Customer(){
    }

    public Customer(String cpf, String cnpj, String urlPhoto, String name, String senha, String email) {
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.urlPhoto = urlPhoto;
        this.name = name;
        this.senha = senha;
        this.email = email;
    }
    public Customer(String id, String cpf, String urlPhoto, String name, String email, List<Company> companyList) {
        this.urlPhoto = urlPhoto;
        this.name = name;
        this.email = email;
        this.companyList = companyList;
    }


}
