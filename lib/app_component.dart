import 'package:angular/angular.dart';

@Component(
  selector: 'my-app',
  template: '<h1>Hello {{name}} . This is still a work in progress</h1>',
)
class AppComponent {
  var name = 'World';
}
