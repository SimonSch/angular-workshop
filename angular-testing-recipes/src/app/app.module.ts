import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OutputComponent} from "./components/output/output.component";
import {AsyncComponent} from "./components/async-stream/async-stream.component";
import {CollapsiblePanelComponent} from "./components/content-projection/content-projection.component";
import {InputComponent} from "./components/input/input.component";
import {DynamicStylesComponent} from "./components/dynamic-styles/dynamic-styles.component";
import {CounterComponent} from "./components/counter/counter.component";
import {DynamicCssClassesComponent} from "./components/dynamic-css-classes/dynamic-css-classes.component";
import {DomTestingComponent} from "./components/dom-testing/domtesting.component";
import {WithExternalServiceComponent} from "./components/mock-external-component/component-mock-external.component";

@NgModule({
    declarations: [
        AppComponent,
        OutputComponent,
        InputComponent,
        DynamicStylesComponent,
        DynamicCssClassesComponent,
        DomTestingComponent,
        CounterComponent,
        CollapsiblePanelComponent,
        AsyncComponent,
        WithExternalServiceComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
