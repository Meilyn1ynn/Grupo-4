package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Pago;
import pe.edu.upc.apisanisidro.repositories.PagoRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IPagoService;

import java.util.List;

@Service
public class PagoServiceImplement implements IPagoService {
    @Autowired
    private PagoRepository repository;

    @Override
    public List<Pago> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Pago p) {
        repository.save(p);
    }

    @Override
    public Pago listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Pago p) {
        repository.save(p);
    }
}
