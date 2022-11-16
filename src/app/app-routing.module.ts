import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then(m => m.FiltersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'car-detail',
    loadChildren: () => import('./car-detail/car-detail.module').then(m => m.CarDetailPageModule)
  },
  {
    path: 'further-detail',
    loadChildren: () => import('./further-detail/further-detail.module').then(m => m.FurtherDetailPageModule)
  },
  {
    path: 'list-your-bike',
    loadChildren: () => import('./list-your-bike/list-your-bike.module').then(m => m.ListYourBikePageModule)
  },
  {
    path: 'list-your-car',
    loadChildren: () => import('./list-your-car/list-your-car.module').then(m => m.ListYourCarPageModule)
  },
  {
    path: 'all-available-motor',
    loadChildren: () => import('./all-available-motor/all-available-motor.module').then(m => m.AllAvailableMotorPageModule)
  },
  {
    path: 'view-all-notifications',
    loadChildren: () => import('./view-all-notifications/view-all-notifications.module').then(m => m.ViewAllNotificationsPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoritePageModule)
  },
  {
    path: 'view-bike-detail',
    loadChildren: () => import('./view-bike-detail/view-bike-detail.module').then(m => m.ViewBikeDetailPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsPageModule)
  },
  {
    path: 'booking-list',
    loadChildren: () => import('./booking-list/booking-list.module').then(m => m.BookingListPageModule)
  },
  {
    path: 'car-booking',
    loadChildren: () => import('./car-booking/car-booking.module').then(m => m.CarBookingPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryPageModule)
  },
  {
    path: 'listed-car',
    loadChildren: () => import('./listed-car/listed-car.module').then(m => m.ListedCarPageModule)
  },
  {
    path: 'listed-motor',
    loadChildren: () => import('./listed-motor/listed-motor.module').then(m => m.ListedMotorPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'contact-support',
    loadChildren: () => import('./contact-support/contact-support.module').then(m => m.ContactSupportPageModule)
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then(m => m.PaymentDetailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then(m => m.RatingPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./chat-list/chat-list.module').then(m => m.ChatListPageModule)
  },
  {
    path: 'earning',
    loadChildren: () => import('./earning/earning.module').then(m => m.EarningPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'verify-mobile-number',
    loadChildren: () => import('./verify-mobile-number/verify-mobile-number.module').then(m => m.VerifyMobileNumberPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'other-booking-list',
    loadChildren: () => import('./other-booking-list/other-booking-list.module').then(m => m.OtherBookingListPageModule)
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then(m => m.CarListPageModule)
  },
  {
    path: 'give-rating',
    loadChildren: () => import('./give-rating/give-rating.module').then(m => m.GiveRatingPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./chat-detail/chat-detail.module').then(m => m.ChatDetailPageModule)
  },
  {
    path: 'action-booking',
    loadChildren: () => import('./action-booking/action-booking.module').then(m => m.ActionBookingPageModule)
  },
  {
    path: 'edit-list-your-car',
    loadChildren: () => import('./edit-list-your-car/edit-list-your-car.module').then(m => m.EditListYourCarPageModule)
  },
  {
    path: 'edit-motor',
    loadChildren: () => import('./edit-motor/edit-motor.module').then(m => m.EditMotorPageModule)
  },
  {
    path: 'enter-offer',
    loadChildren: () => import('./enter-offer/enter-offer.module').then(m => m.EnterOfferPageModule)
  },
  {
    path: 'accept-offer',
    loadChildren: () => import('./accept-offer/accept-offer.module').then(m => m.AcceptOfferPageModule)
  },
  {
    path: 'photoviewer',
    loadChildren: () => import('./photoviewer/photoviewer.module').then(m => m.PhotoviewerPageModule)
  },
  {
    path: 'flutter-waves',
    loadChildren: () => import('./flutter-waves/flutter-waves.module').then(m => m.FlutterWavesPageModule)
  },
  {
    path: 'verify-new-code',
    loadChildren: () => import('./verify-new-code/verify-new-code.module').then(m => m.VerifyNewCodePageModule)
  },
  {
    path: 'booking-detail-view',
    loadChildren: () => import('./booking-detail-view/booking-detail-view.module').then(m => m.BookingDetailViewPageModule)
  },
  {
    path: 'reviews-or-rating',
    loadChildren: () => import('./reviews-or-rating/reviews-or-rating.module').then(m => m.ReviewsOrRatingPageModule)
  },
  {
    path: 'car-documents',
    loadChildren: () => import('./car-documents/car-documents.module').then(m => m.CarDocumentsPageModule)
  },
  {
    path: 'topdest',
    loadChildren: () => import('./topdest/topdest.module').then(m => m.TopdestPageModule)
  },
  {
    path: 'topratedplacecar',
    loadChildren: () => import('./topratedplacecar/topratedplacecar.module').then(m => m.TopratedplacecarPageModule)
  },
  {
    path: 'listcar1',
    loadChildren: () => import('./listcar1/listcar1.module').then(m => m.Listcar1PageModule)
  },
  {
    path: 'listcar2',
    loadChildren: () => import('./listcar2/listcar2.module').then(m => m.Listcar2PageModule)
  },
  {
    path: 'listcar3',
    loadChildren: () => import('./listcar3/listcar3.module').then(m => m.Listcar3PageModule)
  },
  {
    path: 'listcar4',
    loadChildren: () => import('./listcar4/listcar4.module').then(m => m.Listcar4PageModule)
  },  {
    path: 'listcar5',
    loadChildren: () => import('./listcar5/listcar5.module').then( m => m.Listcar5PageModule)
  },
  {
    path: 'listcar6',
    loadChildren: () => import('./listcar6/listcar6.module').then( m => m.Listcar6PageModule)
  },
  {
    path: 'listcar7',
    loadChildren: () => import('./listcar7/listcar7.module').then( m => m.Listcar7PageModule)
  },
  {
    path: 'listcar8',
    loadChildren: () => import('./listcar8/listcar8.module').then( m => m.Listcar8PageModule)
  },
  {
    path: 'listcar1draft',
    loadChildren: () => import('./listcar1draft/listcar1draft.module').then( m => m.Listcar1draftPageModule)
  },
  {
    path: 'listcar2draft',
    loadChildren: () => import('./listcar2draft/listcar2draft.module').then( m => m.Listcar2draftPageModule)
  },
  {
    path: 'listcar3draft',
    loadChildren: () => import('./listcar3draft/listcar3draft.module').then( m => m.Listcar3draftPageModule)
  },
  {
    path: 'listcar4draft',
    loadChildren: () => import('./listcar4draft/listcar4draft.module').then( m => m.Listcar4draftPageModule)
  },
  {
    path: 'listcar6draft',
    loadChildren: () => import('./listcar6draft/listcar6draft.module').then( m => m.Listcar6draftPageModule)
  },
  {
    path: 'listcar7draft',
    loadChildren: () => import('./listcar7draft/listcar7draft.module').then( m => m.Listcar7draftPageModule)
  },
  {
    path: 'listcar8draft',
    loadChildren: () => import('./listcar8draft/listcar8draft.module').then( m => m.Listcar8draftPageModule)
  },
  {
    path: 'listcar9draft',
    loadChildren: () => import('./listcar9draft/listcar9draft.module').then( m => m.Listcar9draftPageModule)
  },
  {
    path: 'listcar10draft',
    loadChildren: () => import('./listcar10draft/listcar10draft.module').then( m => m.Listcar10draftPageModule)
  },
  {
    path: 'listcar11draft',
    loadChildren: () => import('./listcar11draft/listcar11draft.module').then( m => m.Listcar11draftPageModule)
  },
  {
    path: 'listcar5draft',
    loadChildren: () => import('./listcar5draft/listcar5draft.module').then( m => m.Listcar5draftPageModule)
  },
  {
    path: 'mydraftcar',
    loadChildren: () => import('./mydraftcar/mydraftcar.module').then( m => m.MydraftcarPageModule)
  },
  {
    path: 'paymentest',
    loadChildren: () => import('./paymentest/paymentest.module').then( m => m.PaymentestPageModule)
  },
  {
    path: 'view-image',
    loadChildren: () => import('./view-image/view-image.module').then( m => m.ViewImagePageModule)
  },
  {
    path: 'profileaftersigup',
    loadChildren: () => import('./profileaftersigup/profileaftersigup.module').then( m => m.ProfileaftersigupPageModule)
  },
  {
    path: 'deleteaccount',
    loadChildren: () => import('./deleteaccount/deleteaccount.module').then( m => m.DeleteaccountPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
