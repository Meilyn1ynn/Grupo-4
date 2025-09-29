package pe.edu.upc.apisanisidro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.apisanisidro.entities.Contrato;
import pe.edu.upc.apisanisidro.servicesinterfaces.IContratoService;

import java.util.List;

@RestController
@RequestMapping("/api/contratos")
@CrossOrigin(origins = "*")
public class ContratoController {
    
    @Autowired
    private IContratoService contratoService;
    
    @GetMapping
    public ResponseEntity<List<Contrato>> listarContratos() {
        List<Contrato> contratos = contratoService.list();
        return ResponseEntity.ok(contratos);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Contrato> obtenerContrato(@PathVariable int id) {
        Contrato contrato = contratoService.listId(id);
        if (contrato != null) {
            return ResponseEntity.ok(contrato);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<String> crearContrato(@RequestBody Contrato contrato) {
        try {
            contratoService.insert(contrato);
            return ResponseEntity.ok("Contrato creado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear contrato: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> actualizarContrato(@PathVariable int id, @RequestBody Contrato contrato) {
        try {
            contrato.setIdContrato(id);
            contratoService.update(contrato);
            return ResponseEntity.ok("Contrato actualizado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar contrato: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarContrato(@PathVariable int id) {
        try {
            contratoService.delete(id);
            return ResponseEntity.ok("Contrato eliminado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar contrato: " + e.getMessage());
        }
    }
}