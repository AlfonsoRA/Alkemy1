package com.alfonso.alkemy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Usuario;
import com.alfonso.alkemy.interfaces.IUsuarioService;
import com.alfonso.alkemy.repository.UsuariosRepository;

@Service
public class UsuarioService implements IUsuarioService{

	@Autowired
	private UsuariosRepository repositoryUsuario;
	
	@Override
	public List<Usuario> listUsuarios(String rol) {
		return repositoryUsuario.findByRol(rol);
		
	}

	@Override
	public Usuario getUsuario(Long id) {
		return repositoryUsuario.findById(id).orElse(null);
	}

	@Override
	public Usuario guardarUsuario(Usuario usuario) {
		return repositoryUsuario.save(usuario);
	}

	@Override
	public Usuario updateUsuario(Usuario usuario) {
		return repositoryUsuario.save(usuario);
	}

	@Override
	public void delete(Long id) {
		repositoryUsuario.deleteById(id);;
		
	}

}
