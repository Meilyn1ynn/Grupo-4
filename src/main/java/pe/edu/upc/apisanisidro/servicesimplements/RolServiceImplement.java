package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Roles;
import pe.edu.upc.apisanisidro.repositories.RolesRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IRolService;

import java.util.List;

@Service
public class RolServiceImplement implements IRolService {
    @Autowired
    private RolesRepository repository;

    @Override
    public List<Roles> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Roles r) {
        repository.save(r);
    }

    @Override
    public Roles listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Roles r) {
        repository.save(r);
    }

    @Override
    public List<Roles> buscarService(String nombre) {
        return repository.busca(nombre);
    }
}