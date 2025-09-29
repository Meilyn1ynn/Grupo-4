package pe.edu.upc.apisanisidro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.apisanisidro.entities.Roles;
import pe.edu.upc.apisanisidro.servicesinterfaces.IRolService;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@CrossOrigin(origins = "*")
public class controllersRoles {
    
    @Autowired
    private IRolService rolService;
    
    @GetMapping
    public ResponseEntity<List<Roles>> listarRoles() {
        List<Roles> roles = rolService.list();
        return ResponseEntity.ok(roles);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Roles> obtenerRol(@PathVariable int id) {
        Roles rol = rolService.listId(id);
        if (rol != null) {
            return ResponseEntity.ok(rol);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<String> crearRol(@RequestBody Roles rol) {
        try {
            rolService.insert(rol);
            return ResponseEntity.ok("Rol creado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear rol: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> actualizarRol(@PathVariable int id, @RequestBody Roles rol) {
        try {
            rol.setIdRol(id);
            rolService.update(rol);
            return ResponseEntity.ok("Rol actualizado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar rol: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarRol(@PathVariable int id) {
        try {
            rolService.delete(id);
            return ResponseEntity.ok("Rol eliminado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar rol: " + e.getMessage());
        }
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<List<Roles>> buscarRoles(@RequestParam String nombre) {
        List<Roles> roles = rolService.buscarService(nombre);
        return ResponseEntity.ok(roles);
    }
}
