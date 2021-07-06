<template>
  <div >
						<!--begin::Subheader-->
						<!--begin::Entry-->
						<div >

									<div >
										<!--begin::Card-->
										<div >
											<!--begin::Header-->
											<div class="card-header py-3">
												<div class="card-title align-items-start flex-column">
													<h3 class="card-label font-weight-bolder text-dark">Personal Information</h3>
													<span class="text-muted font-weight-bold font-size-sm mt-1">Personal Informaiton</span>
												</div>
															<button type="submit" class="btn btn-success mr-2">Updateprofile</button>

											</div>
											<!--end::Header-->
											<!--begin::Form-->
											<!--begin::Content-->
<div class="flex-row-fluid ml-lg-8">
    <!--begin::Card-->
    <div class="card card-custom card-stretch">
        <!--begin::Header-->
        <div class="card-header py-3">
            <div class="card-title align-items-start flex-column">
                <h3 class="card-label font-weight-bolder text-dark">MY-Info</h3>
            </div>
        </div>
        <!--end::Header-->
        <!--begin::Form-->
        <form class="form" id="my_profile">
            <!--begin::Body-->
            <div class="card-body">
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right"> Name</label>
                    <div class="col-lg-9 col-xl-6">
                        <input id="username" class="form-control form-control-lg form-control-solid"  readonly value="" />
                    </div>
                </div>
                <div class="row">
                    <label class="col-xl-3"></label>
                    <div class="col-lg-9 col-xl-6">
                        <h5 class="font-weight-bold mt-10 mb-6">Contact Info</h5>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Contact Phone</label>
                    <div class="col-lg-9 col-xl-6">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="la la-phone"></i>
                                </span>
                            </div>
                            <input id="phone" readonly class="form-control form-control-lg form-control-solid"  placeholder="Phone" />
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label text-right">Email Address</label>
                    <div class="col-lg-9 col-xl-6">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="la la-at"></i>
                                </span>
                            </div>
                            <input id="email" readonly class="form-control form-control-lg form-control-solid" value="" placeholder="Email" />
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Body-->
        </form>
        <!--end::Form-->
    </div>
</div>
											<!--end::Form-->
										</div>
									</div>
									<!--end::Content-->
								</div>
						<!--end::Entry-->
					</div>
</template>
<script setup>

</script>
