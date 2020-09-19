# ourDailyApp

I have tried to use different ways to improve the code reusability, flexibility and complexity.

1. HOC - 
@Use case: connect() withRouter() etc.
@pros: reusability UP
@cons: flexibility DOWN as we can only pass argument / props to modify the component inside of HOC but not the HOC itself.
       complexity BAD as it involves nested component and it's call another component inside if the HOC, which the final thing that is being retured is important (jsx doesn't render function).
@suggested Use case: Use it when we don't need much flexibility, just like react building it's library with a lot of Object.freeze() Object.seal() to restrict people how to use the component.

2. RenderProp
@Use case: Context API's consumer etc.
@pros: reusability UP flexibility and complexity is better than HOC as we can now pass props to the renderPropsComponent to modify it's operation.
@cons: complexity is better but still can be improved as we are nesting component and we have to pass component (to children / prop) as function (() => <Component/>) so that the Component will now be rendered and we can postpone it to be rendered inside the renderPropComponent.

3. Context API
@props: reusability UP scope UP
We have multiple ways to define the consumer, such as using render prop style, hook style.
@cons: Abusing context API can make the code complexity and readability DOWN, because as to define the context.provider, we have to use composition which will nest the children inside of the provider.
@Suggested use cases: Use for Super huge implicit prop passing, like themeing or language settings. Due to it's incapability of high update rate.

4. customHooks
@Use case: useDispatch useSelector useState useMemo useCallback useContext etc.
@props: reusability UP complexity GOOD
It is perfect to be used to group things to build a more readable and flexible app.
@cons: It can also be used to provide functionality to the component like renderProp and others, but unlike renderProp, we are can not decide how to component to be rendered inside of the customHook file, since it is used to export important "DATA" to component and let them to decide how to render. But actually it only about the way you like to structure your codebase. It doesn't matter.

NOTES: custom Context and custom Hooks can be built to act like a reducer
