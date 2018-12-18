
import MyWidget from 'App';
export default {
widgets: {
   myWidget: {
      render: (args) => {
          ReactDOM.render(
              <MyWidget />
          );
      }
   }
}