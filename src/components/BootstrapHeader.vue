<template>
  <nav class="navbar navbar-expand-lg bg-primary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="fw-light text-light">get</span>
        <span class="fw-normal text-light">day</span>
        <span class="fw-bold text-light">trends</span>
      </a>
      <!-- btn for responsive -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <button
              type="button"
              class="btn btn-outline-light border-2 mt-2"
              aria-expanded="false"
            >
              <span class="fs-6">
                Vietnam
              </span>  <font-awesome-icon icon="fa-caret-down" />
            </button>
            
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light border-2" type="submit">Search </button>
        </form>
        <div>
          <button type="button" class="btn btn-outline-light rounded-circle mx-2 my-2 border-2"><span><font-awesome-icon icon="fa-regular fa-user" /></span></button>
          
        </div>
      </div>
    </div>
  </nav>
</template>
