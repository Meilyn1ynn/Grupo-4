package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Propiedad;
import pe.edu.upc.apisanisidro.repositories.PropiedadRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IPropiedadService;

import java.util.List;

@Service
public class PropiedadServiceImplement implements IPropiedadService {
    @Autowired
    private PropiedadRepository repository;

    @Override
    public List<Propiedad> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Propiedad p) {
        repository.save(p);
    }

    @Override
    public Propiedad listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Propiedad p) {
        repository.save(p);
    }

    @Override
    public List<Propiedad> buscarService(String nombre) {
        return repository.buscaPorTitulo(nombre);
    }
}
