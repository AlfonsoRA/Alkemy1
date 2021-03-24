package com.alfonso.alkemy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alfonso.alkemy.entity.Usuario;

public interface UsuariosRepository extends JpaRepository<Usuario, Integer>{

	public List<Usuario> findByRol(String rol);
}
