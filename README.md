# MINI-PROJECTS-HTML-CSS
Mini Projects for practicing HTML&amp;CSS

### [1] 220320 Add background-video in Website

</br>

  - Refer to < https://www.youtube.com/watch?v=znqUwx0b0HI | How To Add Video Background In Website Using HTML And CSS Step By Step Tutorial >
  - ![image](https://user-images.githubusercontent.com/45444757/159655391-a0d37141-02bd-4456-a484-0fafb5194d6d.png)


</br>
</br>
<hr>

### [2] 220524 Social Media Website

💥 되새길 개념들
</br>
  * Refer to < https://www.youtube.com/watch?v=NljIHlZRTTE | How To Make A Website Like Facebook Using HTML And CSS | Social Media Website Design Step By Step >
  * Checked again
   - when making vertically aligned items to horizontally, he doesn't changed flex-direction. He used "inline-box"
   - To show user is online-mode, He make user profile in navigation bar to has color circle. And to implement that, he use another class and make it ":after"
   - To make and align side-bars, he use "align-self: flex-start"
   - set nav to sticky and sidebars to sticky. make navbar static to the top and sidebars go bottom of the navbar when they are scroll up " z-index: 100 "
   - " width: fit-content "
   - .imp-links a:last-child => access last item "last-child" in CSS !
   - .event > .left-event css : "overflow:hidden", "box-shadow: 0, 0, 10px rgba(0, 0, 0, 0.1);", text-align:center; <-> !have to compare the other center aligns
      : overflow:hidden: for the situation that span in .left-event get position:absolute and .left-event get position:relative, if overflow:hidden is coded then the parent item .left-event's border-radius get applied to it's descendent element span.
   -  "top: unset;"
   -  to give gradient black cover , "linear-gradient(transparent, rgba(0, 0, 0, 0.5))"
   -  "margin-bottom: -5px;" : It can be given a minus number to make the item go its oposite direction"
   -  use "resize:none" for the textarea
   -  "display: inline-flex;"
   -  <\hr> tag to make horizontal line
   -  "max-height:0;" to hide item
   -  can add(define) class name in css file only !
   -  ".classList.toggle()" from JS
   -  "transition: [other css item] [time] " and in transition element, items can be multiple
   -  "setItem(), getItem()" in JS
