package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.UsuarioRol;
import pe.edu.upc.apisanisidro.repositories.UsuarioRolRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IUsuarioRolService;

import java.util.List;

@Service
public class UsuarioRolServiceImplement implements IUsuarioRolService {
    @Autowired
    private UsuarioRolRepository repository;

    @Override
    public List<UsuarioRol> list() {
        return repository.findAll();
    }

    @Override
    public void insert(UsuarioRol ur) {
        repository.save(ur);
    }

    @Override
    public UsuarioRol listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(UsuarioRol ur) {
        repository.save(ur);
    }
}
