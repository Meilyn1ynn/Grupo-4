package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Soporte;
import pe.edu.upc.apisanisidro.repositories.SoporteRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.ISoporteService;

import java.util.List;

@Service
public class SoporteServiceImplement implements ISoporteService {
    @Autowired
    private SoporteRepository repository;

    @Override
    public List<Soporte> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Soporte s) {
        repository.save(s);
    }

    @Override
    public Soporte listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Soporte s) {
        repository.save(s);
    }
}
