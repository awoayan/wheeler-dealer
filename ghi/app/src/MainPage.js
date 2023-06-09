function MainPage() {
  return (
    <div>
      <img id="bgimage" style={{ 'left': '0', 'top': '0', "position": "absolute", 'zIndex': '-1', 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7V5vREiSKty9j5HdYQaXK2HFKnIDZSDMHAw&usqp=CAU" />
      <div className="rounded-pill ">
        <div className="mt-5 text-center bg-primary rounded-pill overflow-hidden">
          <div className="row bg-info rounded-pill">
            <div className="col px-0">
              <img className="rounded" style={{ 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4atarSdn0961qlS01qgaW5S2B4VHaTFDtA&usqp=CAU" />
            </div>
            <div className="col-lg-6 mx-auto bg-info align-self-center">

              <h1 className="display-5 fw-bold text-dark">CarCar</h1>

              <p className="lead mb-4 text-dark">
                The premiere solution for automobile dealership
                management!
              </p>
            </div>
            <div className="col px-0">
              <img className="rounded" style={{ 'height': '100%', 'width': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwWakaoBm6xQ66Jv8DEgbJS0f0WmTp6UTiA&usqp=CAU" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
