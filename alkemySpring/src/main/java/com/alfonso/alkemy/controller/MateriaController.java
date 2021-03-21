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

import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.interfaces.IMateriaService;

@RestController
@RequestMapping("/materias/")
@CrossOrigin(origins= {"http://localhost:4200"})
public class MateriaController {

	@Autowired
	private IMateriaService materiaService;
	
	@GetMapping("materia")
	@ResponseStatus(HttpStatus.OK)
	public List<Materia> listMateria(){
		
		return materiaService.listMaterias();	
	}
	
	@GetMapping("materia/{id}")
	public ResponseEntity<?> getMateria(@PathVariable("id") Long id) {
		
		Materia materia = null;
		Map<String, Object> response = new HashMap<>();
		try {
			materia = materiaService.getMateria(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		if(materia == null) {
			response.put("mensaje", "El id de la materia: ".concat(id.toString().concat(" no existe en la base de datos!!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Materia>(materia, HttpStatus.OK);
	}
	
	@PostMapping("materia")
	public ResponseEntity<?> save(@Valid @RequestBody Materia materia, BindingResult result) {
		Materia materiaNew = null;
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
			materiaNew = materiaService.guardarMateria(materia);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		
		response.put("mensaje", "la materia ha sido creado con exito!!");
		response.put("materia", materiaNew );
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping("materia/{id}")
	public ResponseEntity<?> updateMateria(@Valid @RequestBody Materia materia, BindingResult result, @PathVariable Long id) {
		
		Materia materiaActual = materiaService.getMateria(id);
		
		Materia materiaUpdate= null;
		
		Map<String, Object> response = new HashMap<>();
		
		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err ->  "El campo '"+ err.getField()+ "' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
					
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		if(materiaActual == null) {
			response.put("mensaje", "Error: No se pudo editar, la materia id: ".concat(id.toString().concat(" no existe en la base de datos!!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		try {
			materiaUpdate = materiaService.updateMateria(materia);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar la materia en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "La materia ha sido actualizado con exito!!");
		response.put("materia", materiaUpdate );
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@DeleteMapping("materia/{id}")
	public ResponseEntity<?> deleteMateria(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		
		try {
			materiaService.delete(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar la materia en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La materia ha sido eliminado con exito!!");
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);		
	}
}
