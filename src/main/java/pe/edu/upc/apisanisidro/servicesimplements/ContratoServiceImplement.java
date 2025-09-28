package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Contrato;
import pe.edu.upc.apisanisidro.repositories.ContratoRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IContratoService;

import java.util.List;

@Service
public class ContratoServiceImplement implements IContratoService {
    @Autowired
    private ContratoRepository repository;

    @Override
    public List<Contrato> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Contrato c) {
        repository.save(c);
    }

    @Override
    public Contrato listId(int id) {
        return (Contrato) repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Contrato c) {
        repository.save(c);
    }
}