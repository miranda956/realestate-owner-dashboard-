

<template>

<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">

              <div class="card">
                <div class="card-header card-header-primary">
                  <div class="row">
                    <div  class="px-5">
                      <h4 class="card-title px-10">Leases List </h4>
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
                          Tenant Name
                        </th>
                        <th>
                          Property Name
                        </th>

                        <th>
                          Start Date
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Payment Type
                        </th>
                        <th>
                          Status
                        </th>

                      </thead>
                      <tbody id="provider_table">

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
<script>



</script>
