export const PaginaPrincipal = () => {

    return (
    <>
<div class="container mt-5">
            <div class="row">
                <div class="col align-self-center mt-2"> 
                    <div class="text-center mb-5">
                        <h3 class="display-3">Recogida de paquetería</h3>
                    </div>
                    <p>
                        <button class="col-12 btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#TipoUsuario" aria-expanded="false" aria-controls="collapseExample">
                            Tipo de Usuario
                        </button>
                    </p>
                    {/* Desplegable de Tipo de Usuario */}
                    <div class="collapse" id="TipoUsuario">
                        <div class="card card-body">
                            <form action="">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Persona Natural
                                        </label>                                        
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Persona Jurídica
                                        </label>
                                </div>
                                <hr />
                                    <h5>Usuario solicitante</h5>
                                        <input class="col-6 mb-1" type="text" placeholder="Nombre Completo" />
                                        <input class="col-6 mb-1" type="text" placeholder="Documento de Identidad / Rut - Nit" />
                                        <input class="col-6 mb-1" type="text" placeholder="Correo Electrónico" />
                                        <input class="col-6 mb-1" type="text" placeholder="Número de contacto" />
                            </form>
                        </div>
                    </div>             
                </div>
            </div>

            {/* Desplegable Tipo de Usuario */}
            <div class="row">
                <div class="col align-self-center mt-2"> 
                    <div class="text-center">
                    </div>
                    <p>
                        <button class="col-12 btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#TipoEnvio" aria-expanded="false" aria-controls="collapseExample">
                            Tipo de Envío
                        </button>
                    </p>

                    <div class="collapse" id="TipoEnvio">
                        <div class="card card-body">
                            <form action="">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Documentos y/o mercancías menores a 5Kg
                                        </label>
                                </div>
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Documentos y/o mercancías mayores a 5Kg
                                        </label>
                                </div>
                                <hr />
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Desplegable Tipo de Solicitud */}
            <div class="row">
                <div class="col align-self-center mt-2"> 
                    <div class="text-center">
                    </div>
                    <p>
                        <button class="col-12 btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#Solicitud" aria-expanded="false" aria-controls="collapseExample">
                            Tipo de Solicitud
                        </button>
                    </p>
                    
                    <div class="collapse" id="Solicitud">
                        <div class="card card-body">
                            <form action="">
                                <div class="form-check">
                                    <h5>¿Los datos del solicitante son los mismos de la recogida?</h5>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Si
                                        </label>
                                </div>
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                </div>
                                <hr />
                                    <input class="col-4 mb-1" type="text" placeholder="Ciudad" />
                                    <input class="col-4 mb-1" type="text" placeholder="Dia de Recogida" />
                                    <input class="col-4 mb-1" type="text" placeholder="Rango de hora" />
                                    <input class="col-4 mb-1" type="text" placeholder="Dirección de recogida" />
                                    <input class="col-4 mb-1" type="text" placeholder="Producto a recoger" />
                                    <input class="col-4 mb-1" type="text" placeholder="Valor declarado" />
                            </form>
                            <hr />
                        
                        </div>
                    </div>
                    
                </div>
            </div>
                            {/* Desplegable de Unidades */}
            <div class="row">
                <div class="col align-self-center mt-2"> 
                    <div class="text-center">
                    </div>
                    <p>
                        <button class="col-12 btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#Und" aria-expanded="false" aria-controls="collapseExample">
                            Unidades
                        </button>
                    </p>
                    
                    <div class="collapse" id="Und">
                        <div class="card card-body">
                            <form action="">
                                
                                <hr />
                                    <input class="col-6 mb-1" type="text" placeholder="Und (ej: 3)" />
                                    <input class="col-6 mb-1" type="text" placeholder="Peso real(Kg)" />
                                    <input class="col-4 mb-1" type="text" placeholder="Ancho (Cm)" />
                                    <input class="col-4 mb-1" type="text" placeholder="Largo (Cm)" />
                                    <input class="col-4 mb-1" type="text" placeholder="Alto (Cm)" />
                                    <input class="col-12 mb-1" type="text" placeholder="Dice Contener" />
                            </form>
                            <hr />
                        {/* Implementar Modal para Pse y Tarjetas */}
                            <div class="pagareOnline">
                                <h5>Forma de pago:</h5>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col align-self-end">
                        <div>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Validar
                            </button>
                                {/* Implementando el Modal de Bootstrap */}
                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Atención</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Asegúrese de haber llenado todos los campos de forma correcta.
                                                Si desea hacer una modificación presione "Volver", 
                                                de lo contrario presione "Terminar".
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Volver</button>
                                                <button type="button" class="btn btn-success">Terminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
    </>
    )
}