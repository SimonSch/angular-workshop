import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {DynamicStylesComponent} from './dynamic-styles.component';
import {customMatchers} from "../../utils/custom-matchers";
import * as custom from "../../utils/custom-matchers";


describe('DynamicStylesComponent', () => {
    let component: DynamicStylesComponent;
    let fixture: ComponentFixture<DynamicStylesComponent>;

    beforeEach(async(() => {
        jasmine.addMatchers(customMatchers);
        TestBed.configureTestingModule({
            declarations: [DynamicStylesComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicStylesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly set the background style', () => {
        custom.expect(fixture.debugElement.children[0].nativeElement).toHaveStyle({
            'background-color': 'black'
        });
    });
});
