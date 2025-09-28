package pe.edu.upc.apisanisidro.repositories;

import pe.edu.upc.apisanisidro.entities.ContratoClausula;

import java.util.List;

public interface ContratoClausulaRepository {
    List<ContratoClausula> findAll();

    void save(ContratoClausula cc);

    void deleteById(int id);
}
