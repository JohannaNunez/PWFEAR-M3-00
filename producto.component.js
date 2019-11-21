class Producto extends React.Component {

	render (){
		return (
			<div className="card" style={{ width : "18 rem"}}>
			  <img src="..." class="card-img-top" alt="...">
			  <div class="card-body">
			    <h5 class="card-title">{this.props.nombre}</h5>
			    <p class="card-text">ARS {this.props.precio} | {this.props.stock} unid.</p>
			    <a href="#" class="btn btn-primary">Comprar</a>
			  </div>
			</div>
			)


	}
}
///////////////
let productoUno = <Producto nombre="Cafe" stock="500" precio="80" />

ReactDOM.render(productoUno, document.querySelector)