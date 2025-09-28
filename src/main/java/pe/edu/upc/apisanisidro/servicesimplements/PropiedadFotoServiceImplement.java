package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.PropiedadFoto;
import pe.edu.upc.apisanisidro.repositories.PropiedadFotoRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IPropiedadFotoService;

import java.util.List;

@Service
public class PropiedadFotoServiceImplement implements IPropiedadFotoService {
    @Autowired
    private PropiedadFotoRepository repository;

    @Override
    public List<PropiedadFoto> list() {
        return repository.findAll();
    }

    @Override
    public void insert(PropiedadFoto pf) {
        repository.save(pf);
    }

    @Override
    public PropiedadFoto listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(PropiedadFoto pf) {
        repository.save(pf);
    }
}
