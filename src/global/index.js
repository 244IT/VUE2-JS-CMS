import registerElement from "./registerElement"
import registerFilter from "./registerFilter"

export default function registerApp(app) {
  registerElement(app)
  registerFilter(app)
}
