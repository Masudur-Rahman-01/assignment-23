

class Alert{

    static danger(msg) {
        return `<P class="alert alert-danger d-flex justify-content-between ">${msg}<button class="btn-close" data-bs-dismiss="alert" ></button></P>`
    }
    static success(msg) {
        return `<P class="alert alert-success d-flex justify-content-between ">${msg}<button class="btn-close" data-bs-dismiss="alert" ></button></P>`
    }
    static warning(msg) {
        return `<P class="alert alert-warning d-flex justify-content-between ">${msg}<button class="btn-close" data-bs-dismiss="alert" ></button></P>`
    }
}


export default Alert


