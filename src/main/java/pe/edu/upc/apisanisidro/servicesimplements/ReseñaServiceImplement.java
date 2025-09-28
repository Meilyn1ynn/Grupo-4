package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Reseña;
import pe.edu.upc.apisanisidro.repositories.ReseñaRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IReseñaService;

import java.util.List;

@Service
public class ReseñaServiceImplement implements IReseñaService {
    @Autowired
    private ReseñaRepository repository;

    @Override
    public List<Reseña> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Reseña r) {
        repository.save(r);
    }

    @Override
    public Reseña listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Reseña r) {
        repository.save(r);
    }
}
