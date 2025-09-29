package pe.edu.upc.apisanisidro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.apisanisidro.entities.Propiedad;
import pe.edu.upc.apisanisidro.servicesinterfaces.IPropiedadService;

import java.util.List;

@RestController
@RequestMapping("/api/propiedades")
@CrossOrigin(origins = "*")
public class PropiedadController {
    
    @Autowired
    private IPropiedadService propiedadService;
    
    @GetMapping
    public ResponseEntity<List<Propiedad>> listarPropiedades() {
        List<Propiedad> propiedades = propiedadService.list();
        return ResponseEntity.ok(propiedades);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Propiedad> obtenerPropiedad(@PathVariable int id) {
        Propiedad propiedad = propiedadService.listId(id);
        if (propiedad != null) {
            return ResponseEntity.ok(propiedad);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<String> crearPropiedad(@RequestBody Propiedad propiedad) {
        try {
            propiedadService.insert(propiedad);
            return ResponseEntity.ok("Propiedad creada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear propiedad: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> actualizarPropiedad(@PathVariable int id, @RequestBody Propiedad propiedad) {
        try {
            propiedad.setIdPropiedad(id);
            propiedadService.update(propiedad);
            return ResponseEntity.ok("Propiedad actualizada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar propiedad: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPropiedad(@PathVariable int id) {
        try {
            propiedadService.delete(id);
            return ResponseEntity.ok("Propiedad eliminada exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar propiedad: " + e.getMessage());
        }
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<List<Propiedad>> buscarPropiedades(@RequestParam String nombre) {
        List<Propiedad> propiedades = propiedadService.buscarService(nombre);
        return ResponseEntity.ok(propiedades);
    }
}