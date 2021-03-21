package com.alfonso.alkemy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alfonso.alkemy.entity.Usuario;
import com.alfonso.alkemy.interfaces.IUsuarioService;

@RestController
@RequestMapping("/usuarios/")
@CrossOrigin(origins= {"http://localhost:4200"})
public class UsuarioController {

	@Autowired
	private IUsuarioService usuarioService;
	
	@GetMapping("usuarios/{rol}")
	@ResponseStatus(HttpStatus.OK)
	public List<Usuario> listUsuario(@PathVariable String rol){
		
		return usuarioService.listUsuarios(rol);	
	}
	
	@GetMapping("usuario/{id}")
	public ResponseEntity<?> getUsuario(@PathVariable("id") Long id) {
		
		Usuario usuario = null;
		Map<String, Object> response = new HashMap<>();
		try {
			usuario = usuarioService.getUsuario(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		if(usuario == null) {
			response.put("mensaje", "El alumno id: ".concat(id.toString().concat(" no existe en la base de datos!!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}
	
	@PostMapping("usuario")
	public ResponseEntity<?> save(@Valid @RequestBody Usuario usuario, BindingResult result) {
		Usuario usuarioNew = null;
		Map<String, Object> response = new HashMap<>();
		
		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err ->  "El campo '"+ err.getField()+ "' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
					
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		try {
			usuarioNew = usuarioService.guardarUsuario(usuario);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		
		response.put("mensaje", "El alumno ha sido creado con exito!!");
		response.put("alumno", usuarioNew );
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping("usuario/{id}")
	public ResponseEntity<?> updateUsuario(@Valid @RequestBody Usuario usuario, BindingResult result, @PathVariable Long id) {
		
		Usuario usuarioActual = usuarioService.getUsuario(id);
		
		Usuario usuarioUpdate= null;
		
		Map<String, Object> response = new HashMap<>();
		
		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err ->  "El campo '"+ err.getField()+ "' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
					
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		if(usuarioActual == null) {
			response.put("mensaje", "Error: No se pudo editar, el alumno id: ".concat(id.toString().concat(" no existe en la base de datos!!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		try {
			usuarioUpdate = usuarioService.updateUsuario(usuario);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar el alumno en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El cliente ha sido actualizado con exito!!");
		response.put("alumno", usuarioUpdate );
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@DeleteMapping("usuario/{id}")
	public ResponseEntity<?> deleteUsuario(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		
		try {
			usuarioService.delete(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el alumno en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El alumno ha sido eliminado con exito!!");
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);		
	}
}
