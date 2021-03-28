package com.alfonso.alkemy.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alfonso.alkemy.entity.Inscripcion;
import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.entity.Usuario;
import com.alfonso.alkemy.interfaces.IInscripcionService;
import com.alfonso.alkemy.interfaces.IMateriaService;
import com.alfonso.alkemy.interfaces.IUsuarioService;

@RestController
@RequestMapping("/inscripcion/")
@CrossOrigin(origins= {"http://localhost:4200"})
public class InscripcionController {
	
	@Autowired
	private IInscripcionService inscripcionService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IMateriaService materiaService;
	

	@Secured({"ROLE_ADMIN","ROLE_USER"})
	@PostMapping("save/{user}/{materia}")
	public ResponseEntity<?> saveInscripcion( @PathVariable("user") String username, @PathVariable("materia") Long idMateria){
		
		Inscripcion inscripcionNew = null;
		Inscripcion inscripcion = new Inscripcion();
		
		Map<String, Object> response = new HashMap<>();
		
		
		try {
			Usuario usuario = usuarioService.findByUsername(username);
			Materia materia = materiaService.getMateria(idMateria);
			inscripcion.setMateria(materia);
			inscripcion.setUsuario(usuario);
			if(validacionMaterias(usuario, inscripcion)) {
				inscripcionNew = inscripcionService.guardarInscripcion(inscripcion);
				materia.setMax_alum(materia.getMax_alum()-1);
				materiaService.guardarMateria(materia);
			}else {
				response.put("mensaje", "Materia a inscribir en conflicto con otras de horario con otras materias inscriptas!!");
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
			}			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		
		response.put("mensaje", "La inscripcion fue realizada con exito!!");
		response.put("insripcion", inscripcionNew );
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@Secured({"ROLE_ADMIN","ROLE_USER"})
	@GetMapping("inscripciones")
	public ResponseEntity<?> getInscripciones() {
		
 		List<Inscripcion> inscripciones = null;
 		
		Map<String, Object> response = new HashMap<>();
		
		try {
			inscripciones = inscripcionService.listInscripcion();
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar  la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		};
		if(inscripciones == null){
			response.put("mensaje", "Nos se encuentra la inscripcion en la base de datos!!");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		};
		response.put("inscripciones", inscripciones);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
	
	//Valid si el alumno tienen materias en el mismos horario  o si esta incribiendo dos vecesla misma materia
	public boolean validacionMaterias(Usuario usuario, Inscripcion inscripcion) {
		boolean bandera = false;
		List<Inscripcion> lista = inscripcionService.findByUser(usuario);
		if(lista.isEmpty()) {
			return true;
		}else {
			for (Inscripcion item : lista) {			
				if(!(item.getMateria().getDiaSemana().equals(inscripcion.getMateria().getDiaSemana()))) {
					bandera = true;
				}else {
					if(item.getMateria().getHorario().equals(inscripcion.getMateria().getHorario())){
						return false;					
					}else {
						bandera = true;
					}
				}		
			}	
		}			
		return bandera;
	}

}
