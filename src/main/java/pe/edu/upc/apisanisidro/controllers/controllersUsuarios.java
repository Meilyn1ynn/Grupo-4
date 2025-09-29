package pe.edu.upc.apisanisidro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.apisanisidro.entities.Usuarios;
import pe.edu.upc.apisanisidro.servicesinterfaces.IUsuarioService;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class controllersUsuarios {
    
    @Autowired
    private IUsuarioService usuarioService;
    
    @GetMapping
    public ResponseEntity<List<Usuarios>> listarUsuarios() {
        List<Usuarios> usuarios = usuarioService.list();
        return ResponseEntity.ok(usuarios);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Usuarios> obtenerUsuario(@PathVariable int id) {
        Usuarios usuario = usuarioService.listId(id);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<String> crearUsuario(@RequestBody Usuarios usuario) {
        try {
            usuarioService.insert(usuario);
            return ResponseEntity.ok("Usuario creado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear usuario: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> actualizarUsuario(@PathVariable int id, @RequestBody Usuarios usuario) {
        try {
            usuario.setIdUsuario(id);
            usuarioService.update(usuario);
            return ResponseEntity.ok("Usuario actualizado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar usuario: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable int id) {
        try {
            usuarioService.delete(id);
            return ResponseEntity.ok("Usuario eliminado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar usuario: " + e.getMessage());
        }
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<List<Usuarios>> buscarUsuarios(@RequestParam String nombre) {
        List<Usuarios> usuarios = usuarioService.buscarService(nombre);
        return ResponseEntity.ok(usuarios);
    }
}
