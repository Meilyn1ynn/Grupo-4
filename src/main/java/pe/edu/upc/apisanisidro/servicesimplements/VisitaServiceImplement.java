package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Visita;
import pe.edu.upc.apisanisidro.repositories.VisitaRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IVisitaService;

import java.util.List;

@Service
public class VisitaServiceImplement implements IVisitaService {
    @Autowired
    private VisitaRepository repository;

    @Override
    public List<Visita> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Visita v) {
        repository.save(v);
    }

    @Override
    public Visita listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Visita v) {
        repository.save(v);
    }
}
