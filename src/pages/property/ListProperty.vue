<template>
  <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex justify-content-end">
                <a href="add_product.html" class="btn btn-success font-weight-bolder font-size-sm">
                </span>Add New Property</a>
              </div>
              <div class="card">
                <div class="card-header card-header-primary">
                  <div class="row">
                    <div  class="px-5">
                      <h4 class="card-title px-10">MY-PROPERTIES </h4>
                    </div>
                    <div class="px-10">
                      <form class="navbar-form  " id="searchTable">
                        <div class="input-group no-border">
                          <input type="text" value="" class="form-control text-white" placeholder="Search...">
                        </div>
                      </form>

                    </div>
                    </span>

                  </div>

                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID
                        </th>
                        <th>
                          Property Name
                        </th>

                        <th>
                        Property Size
                        </th>
                        <th>
                          Rooms
                        </th>
                        <th>
                        Property Price
                        </th>
                        <th>
                        Build Year
                        </th>
                        <th>
                        Location
                        </th>
                        <th>
                        Description
                        </th>
                        <th>
                         Action
                        </th>
                      </thead>
                      <tbody id="products_table">

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>

</script>
