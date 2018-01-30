import { ViewChild, ElementRef,Renderer2, Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'rg-logo',
  templateUrl: './rgLogo.component.html',
})
export class RgLogo implements AfterViewInit {
  @ViewChild('logoWrapper') el:ElementRef;

  logoTemplate = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 92.4 129" style="enable-background:new 0 0 92.4 129;" xml:space="preserve">
  <path class="st0" d="M88.9,85c-5.8-5.8-20.2-17.3-26.7-23.3C61.5,61,47.8,47.9,46.7,46.9c-2.4-2.4-3.2-4.8-4.7-6.2L2,0.6
  	c-2.2-2.2-1.4,2.5-1.4,2.5c2,8,7.1,15.4,8.9,17.8c1.8,2.4,23.7,24.8,25.1,26c1.8,1.5,6.9,1.7,9.2,3.3c2.3,1.6,5.5,5.5,5.5,5.5
  	l8.9,10.2l23.1,26.8c5.8,5.8,8.6,2.8,8.6,2.8l1.9-1.9C91.6,93.5,94.7,90.8,88.9,85z"/>
  <g>
  	<path class="st0" d="M44.2,51c-0.7-0.5-1.5-1-2.6-1.3L28,62.8L3.2,84.9c-5.5,5.7-2.3,8.7-2.3,8.7l1.8,1.8c0,0,3,3.1,8.4-2.6
  		c5.4-5.6,15.6-19.6,21.2-25.8c0.3-0.4,7.6-8.7,13.1-15.1C45,51.6,44.6,51.2,44.2,51z"/>
  	<path class="st0" d="M92.3,9.9c-0.4-0.4-1.1,0.2-1.1,0.2S77,23.8,72.5,28.6c-1.2,1.2-1.7,0.6-1.7,0.6s-0.8-0.7,0.4-1.9L88.9,7.8
  		c0,0,0.6-0.8,0.2-1.2C88.7,6.2,88,6.7,88,6.7c-6.9,6.4-14.1,13.8-18.7,18.6l0,0c-1.2,1.2-1.8,0.4-1.8,0.4s-0.6-0.5,0.5-1.7
  		c4.5-4.7,17.7-19.4,17.7-19.4s0.6-0.8,0.2-1.2s-1.1,0.1-1.1,0.1C78,9.9,70.8,17.4,66.3,22.1l0,0c-1.2,1.2-1.9,0.4-1.9,0.4
  		S63.8,22,65,20.8c4.5-4.7,17.7-19.4,17.7-19.4s0.6-0.8,0.2-1.2c-0.4-0.4-1.1,0.1-1.1,0.1c-6.9,6.4-14.1,13.8-18.7,18.6
  		c-2.8,3-4.6,4.9-4.7,5c-0.2,0.2-2.6,2.2-4.2,8.5c-1.5,6.3-4.3,9.4-4.3,9.4L46,45.3c0.4,0.6,0.9,1.2,1.4,1.8
  		c0.1,0.1,0.6,0.6,1.2,1.2c2.1-2.5,3.4-3.8,3.7-4.1l0,0c0,0,3-2.9,9-4.5s7.9-4.1,8.1-4.3c0.1-0.1,2-1.9,4.8-4.8
  		c4.6-4.7,11.7-12.2,17.9-19.4C92.2,11.1,92.7,10.4,92.3,9.9z"/>
  </g>
  <g>
  	<path class="st0" d="M0,115.3l4.3-9c0-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0.1l2.5,1.2
  		c0.4,0.2,0.8,0.5,1.1,0.8s0.5,0.7,0.7,1.2c0.2,0.4,0.2,0.9,0.2,1.3c0,0.5-0.1,0.9-0.3,1.4c-0.1,0.3-0.3,0.5-0.5,0.8
  		c-0.2,0.2-0.4,0.4-0.7,0.6c-0.3,0.2-0.5,0.3-0.8,0.4c-0.3,0.1-0.6,0.2-1,0.2l0.5,4.3c0,0.2,0,0.3-0.1,0.4c0,0.1-0.1,0.2-0.2,0.2
  		c-0.1,0.1-0.2,0.1-0.2,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.4-0.3-0.4-0.6l-0.6-4.8L3,112.6l-1.6,3.3
  		c-0.1,0.2-0.2,0.3-0.4,0.4c-0.2,0.1-0.4,0.1-0.6,0s-0.3-0.2-0.4-0.4C-0.1,115.7-0.1,115.5,0,115.3z M5.3,107.6l-1.7,3.6l1.8,0.9
  		c0.3,0.1,0.5,0.2,0.8,0.2c0.3,0,0.5,0,0.8-0.1c0.2-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.3,0.2-0.5,0.2-0.8
  		c0-0.3,0-0.5-0.1-0.8c-0.1-0.2-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.4-0.6-0.5L5.3,107.6z"/>
  	<path class="st0" d="M16.5,119.9c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.2,0.1,0.4,0.1,0.6c-0.1,0.2-0.2,0.4-0.4,0.5
  		c-0.9,0.4-1.8,0.5-2.8,0.2c-1.1-0.3-1.9-0.9-2.4-1.9c-0.5-1-0.7-2-0.4-3.1c0.3-1.1,0.9-1.9,1.9-2.4c1-0.5,2-0.7,3.1-0.4
  		c1.1,0.3,1.9,0.9,2.4,1.9c0.3,0.5,0.4,1,0.5,1.5c0.1,0.5,0,1-0.1,1.6c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.1-0.4,0.1-0.6,0.1l-5.5-1.5
  		c0,0.3,0.1,0.5,0.2,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.4,0.6,0.5c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0.1,0.6,0.1,0.9,0.1
  		c0.3,0,0.6-0.1,0.8-0.2C16.1,119.9,16.3,119.9,16.5,119.9z M17.5,117.6c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.3-0.2-0.5-0.4-0.7
  		c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.2-0.5-0.3-0.7-0.3s-0.5-0.1-0.8-0.1c-0.3,0-0.5,0.1-0.8,0.2c-0.2,0.1-0.5,0.2-0.7,0.4
  		c-0.2,0.2-0.4,0.4-0.5,0.6L17.5,117.6z"/>
  	<path class="st0" d="M23,115.4l0.3,0.1l0.5-2.7c0-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4-0.2,0.6-0.1c0.2,0,0.4,0.1,0.5,0.3
  		c0.1,0.2,0.2,0.4,0.1,0.6l-0.5,2.7l0.9,0.2c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.2,0.4,0.1,0.6c0,0.2-0.1,0.4-0.3,0.5
  		c-0.2,0.1-0.4,0.2-0.6,0.1l-0.9-0.2l-0.6,3.6c-0.2,0.9,0.2,1.5,1.2,1.7c0.2,0,0.4,0.1,0.5,0.3s0.2,0.4,0.1,0.6
  		c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.2-0.6,0.1c-1.9-0.3-2.7-1.5-2.4-3.4l0.6-3.6l-0.3-0.1c-0.2,0-0.4-0.1-0.5-0.3
  		c-0.1-0.2-0.2-0.4-0.1-0.6c0-0.2,0.1-0.4,0.3-0.5C22.6,115.4,22.8,115.4,23,115.4z"/>
  	<path class="st0" d="M30.7,117.3l0,0.1c0.4-0.3,0.8-0.4,1.2-0.5c0.4-0.1,0.9-0.1,1.4-0.1c0.2,0,0.4,0.1,0.7,0.1
  		c0.2,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.1,0.2,0.3,0.2,0.5c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.2
  		c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.2-1-0.3c-0.3,0-0.7,0-1,0.1
  		c-0.3,0.1-0.6,0.3-0.9,0.5c-0.2,0.2-0.5,0.5-0.6,0.7c-0.2,0.3-0.3,0.6-0.3,1l-0.3,3.3c0,0.2-0.1,0.4-0.3,0.5
  		c-0.2,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.3c-0.1-0.2-0.2-0.3-0.2-0.5l0.6-6.5c0-0.2,0.1-0.4,0.3-0.5
  		c0.2-0.1,0.3-0.2,0.6-0.2c0.2,0,0.4,0.1,0.5,0.3C30.7,116.9,30.7,117.1,30.7,117.3z"/>
  	<path class="st0" d="M44.1,125.4c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c-0.3,0.2-0.7,0.4-1.1,0.5
  		c-0.4,0.1-0.8,0.2-1.2,0.1c-0.5,0-1-0.1-1.4-0.3s-0.8-0.5-1.2-0.8c-0.3-0.3-0.6-0.8-0.8-1.2c-0.2-0.5-0.3-0.9-0.3-1.5l0.1-3.5
  		c0-0.2,0.1-0.4,0.2-0.5c0.2-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.5,0.2s0.2,0.3,0.2,0.5l-0.1,3.5c0,0.3,0,0.6,0.2,0.9
  		c0.1,0.3,0.3,0.5,0.5,0.7c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.6,0,0.9-0.2c0.3-0.1,0.5-0.3,0.7-0.5
  		c0.2-0.2,0.4-0.4,0.5-0.7c0.1-0.3,0.2-0.6,0.2-0.9l0.1-3.5c0-0.2,0.1-0.4,0.2-0.5c0.2-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.5,0.2
  		s0.2,0.3,0.2,0.5l-0.2,6.6c0,0.2-0.1,0.4-0.2,0.5C44.4,125.4,44.3,125.4,44.1,125.4z"/>
  	<path class="st0" d="M54.3,124.3c-0.7,0.6-1.5,1-2.5,1c-1.1,0-2.1-0.3-2.9-1.1c-0.8-0.8-1.3-1.7-1.3-2.8c0-1.1,0.3-2.1,1.1-2.9
  		c0.8-0.8,1.7-1.3,2.8-1.3c1.1,0,2.1,0.3,2.9,1.1c0.8,0.8,1.3,1.7,1.3,2.8l0.2,4c0,0.3,0,0.7-0.1,1c-0.1,0.3-0.2,0.6-0.4,0.9
  		c-0.2,0.3-0.4,0.5-0.6,0.7c-0.2,0.2-0.5,0.4-0.8,0.6c-0.3,0.2-0.6,0.3-0.9,0.4c-0.3,0.1-0.6,0.1-1,0.2c-0.4,0-0.8,0-1.1-0.1
  		c-0.4-0.1-0.7-0.2-1.1-0.4c-0.3-0.2-0.7-0.4-0.9-0.7s-0.5-0.6-0.7-0.9c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.4,0.2-0.5
  		c0.1-0.1,0.3-0.2,0.5-0.2c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.4,0.4c0.2,0.2,0.3,0.4,0.5,0.5c0.6,0.5,1.2,0.8,2,0.7
  		c0.8,0,1.4-0.3,1.9-0.9c0.3-0.4,0.5-0.8,0.4-1.2L54.3,124.3z M51.6,118.7c-0.4,0-0.7,0.1-1,0.2s-0.6,0.3-0.8,0.6
  		c-0.2,0.2-0.4,0.5-0.5,0.8c-0.1,0.3-0.2,0.6-0.2,1c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.6,0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.5
  		c0.3,0.1,0.6,0.2,1,0.2c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.2,0.4-0.5,0.5-0.8c0.1-0.3,0.2-0.6,0.2-1
  		c0-0.3-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.6-0.8c-0.2-0.2-0.5-0.4-0.8-0.5C52.3,118.8,51.9,118.7,51.6,118.7z"/>
  	<path class="st0" d="M65.7,123.9c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.3-0.3-0.3-0.5c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.2-0.7,0.3-1.2,0.3
  		c-0.5,0.1-1,0-1.5-0.1c-0.5-0.1-0.9-0.3-1.3-0.6c-0.4-0.3-0.7-0.6-1-1.1c-0.3-0.4-0.4-0.9-0.5-1.4l-0.5-3.5c0-0.2,0-0.4,0.1-0.6
  		c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.3,0.3,0.3,0.5l0.5,3.5c0,0.3,0.1,0.6,0.3,0.8c0.2,0.3,0.3,0.5,0.6,0.6
  		c0.2,0.2,0.5,0.3,0.8,0.4c0.3,0.1,0.6,0.1,0.9,0.1c0.3,0,0.6-0.1,0.8-0.3c0.3-0.2,0.5-0.3,0.6-0.6c0.2-0.2,0.3-0.5,0.4-0.8
  		c0.1-0.3,0.1-0.6,0.1-0.9l-0.5-3.5c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.3,0.3,0.3,0.5
  		l0.9,6.5c0,0.2,0,0.4-0.1,0.6C66.1,123.8,66,123.9,65.7,123.9z"/>
  	<path class="st0" d="M70.2,119.1c-0.5-0.1-0.8-0.2-1-0.3l0,0c-0.4-0.3-0.7-0.6-0.8-1.1c-0.1-0.4-0.1-0.7,0-1
  		c0.1-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.6-0.5,0.9-0.7s0.7-0.4,1.1-0.4c1.2-0.3,2.3-0.1,3.3,0.7c0.1,0.1,0.2,0.2,0.3,0.4
  		c0.1,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.3,0.3-0.5,0.3c-0.1,0-0.3,0-0.4,0c-0.1-0.1-0.2-0.1-0.4-0.2c-0.6-0.4-1.2-0.5-1.9-0.3
  		c-0.7,0.2-1.2,0.5-1.5,1c-0.1,0.1-0.1,0.2,0,0.3c0,0.1,0.1,0.2,0.2,0.2l3.5,0.3c0.5,0.1,0.8,0.2,1,0.3l0,0c0.4,0.3,0.7,0.6,0.8,1.1
  		c0.1,0.4,0.1,0.7,0,1c-0.1,0.3-0.3,0.6-0.6,0.9c-0.3,0.3-0.6,0.5-0.9,0.7c-0.3,0.2-0.7,0.3-1.1,0.4c-1.2,0.3-2.3,0.1-3.3-0.6
  		c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.2,0-0.4,0.1-0.6c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.3,0,0.4,0c0.1,0.1,0.2,0.1,0.4,0.2
  		c0.6,0.4,1.2,0.5,1.9,0.3c0.7-0.2,1.1-0.5,1.4-1c0-0.1,0.1-0.2,0-0.3c0-0.1-0.1-0.2-0.3-0.2L70.2,119.1z"/>
  	<path class="st0" d="M77,112.8l0.3-0.1l-1-2.5c-0.1-0.2-0.1-0.4,0-0.6c0.1-0.2,0.2-0.3,0.4-0.4c0.2-0.1,0.4-0.1,0.6,0
  		c0.2,0.1,0.3,0.2,0.4,0.4l1,2.5l0.8-0.3c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0.1,0.4,0,0.6
  		c-0.1,0.2-0.2,0.3-0.4,0.4l-0.8,0.3l1.3,3.4c0.3,0.9,1,1.2,1.9,0.8c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.3,0.2,0.4,0.4
  		c0.1,0.2,0.1,0.4,0,0.6c-0.1,0.2-0.2,0.3-0.4,0.4c-1.8,0.7-3.1,0.1-3.8-1.7l-1.3-3.4l-0.3,0.1c-0.2,0.1-0.4,0.1-0.6,0
  		c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.1-0.4,0-0.6C76.7,113,76.8,112.9,77,112.8z"/>
  	<path class="st0" d="M91.9,109.9c0.6,1,0.7,2,0.5,3c-0.3,1.1-0.9,1.9-1.8,2.5c-1,0.6-2,0.7-3,0.5c-1.1-0.3-1.9-0.9-2.5-1.8
  		c-0.6-1-0.7-2-0.5-3c0.3-1.1,0.9-1.9,1.8-2.5c0.9-0.6,2-0.7,3-0.5c0.5,0.1,1,0.4,1.4,0.7C91.2,109,91.6,109.4,91.9,109.9z
  		 M87.1,109.8c-0.3,0.2-0.6,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.4,0.9c-0.1,0.3-0.1,0.6,0,1c0,0.3,0.2,0.6,0.3,0.9
  		c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.1,1,0.1c0.3,0,0.6-0.2,1-0.3c0.3-0.2,0.5-0.4,0.7-0.7
  		c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.1-0.6,0-1c0-0.3-0.2-0.6-0.3-0.9c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-0.9-0.4
  		c-0.3-0.1-0.6-0.1-1-0.1C87.7,109.5,87.4,109.6,87.1,109.8z"/>
  </g>
  </svg>
`;

  constructor() {

  }

  ngAfterViewInit() {
    this.el.nativeElement.innerHTML = this.logoTemplate;
  }
}