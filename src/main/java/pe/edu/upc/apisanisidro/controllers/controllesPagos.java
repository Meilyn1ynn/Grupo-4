package pe.edu.upc.apisanisidro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.apisanisidro.entities.Pago;
import pe.edu.upc.apisanisidro.servicesinterfaces.IPagoService;

import java.util.List;

@RestController
@RequestMapping("/api/pagos")
@CrossOrigin(origins = "*")
public class controllesPagos {
    
    @Autowired
    private IPagoService pagoService;
    
    @GetMapping
    public ResponseEntity<List<Pago>> listarPagos() {
        List<Pago> pagos = pagoService.list();
        return ResponseEntity.ok(pagos);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Pago> obtenerPago(@PathVariable int id) {
        Pago pago = pagoService.listId(id);
        if (pago != null) {
            return ResponseEntity.ok(pago);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<String> crearPago(@RequestBody Pago pago) {
        try {
            pagoService.insert(pago);
            return ResponseEntity.ok("Pago creado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear pago: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> actualizarPago(@PathVariable int id, @RequestBody Pago pago) {
        try {
            pago.setIdPago(id);
            pagoService.update(pago);
            return ResponseEntity.ok("Pago actualizado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar pago: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPago(@PathVariable int id) {
        try {
            pagoService.delete(id);
            return ResponseEntity.ok("Pago eliminado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar pago: " + e.getMessage());
        }
    }
}
