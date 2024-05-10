import React from 'react';
import MenuItem from '../components/collapsibleMenu/menuItem';
import CollapsibleMenu from '../components/collapsibleMenu/collapsibleMenu';
//import {sampleModuleController} from '../controllers/sampleModuleContrller';

export const sideMenuContent = [
<MenuItem  key={"1231122"}>❤️ &#xFE0E; Purpose</MenuItem>,   
<MenuItem  key={"1231123"}>🥅 &#xFE0E; Goals</MenuItem>,
<CollapsibleMenu name="✔ Sample Collapsible Menu">
    <MenuItem>🗀 Example Menu Item</MenuItem>
    <CollapsibleMenu name="🗀 Sample Collapsible Menu">
        <MenuItem >Example Menu Itemmmmm</MenuItem>
        <CollapsibleMenu name="Sample Collapsible Menu">
            <MenuItem>Example Menu Item</MenuItem>
            <CollapsibleMenu name="Sample Collapsible Menu">
                <MenuItem>Example Menu Item</MenuItem>
                <CollapsibleMenu name="Example Collapsible Menu">
                    <MenuItem>sample item</MenuItem>
                </CollapsibleMenu>
            </CollapsibleMenu>
        </CollapsibleMenu>
        <CollapsibleMenu name="Sample Collapsible Menu" >
            <MenuItem>Example Menu Item</MenuItem>
            <CollapsibleMenu name="Sample Collapsible Menu" >
                <MenuItem>Example Menu Item</MenuItem>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
            </CollapsibleMenu>
        </CollapsibleMenu>
    </CollapsibleMenu>
    <CollapsibleMenu name="Sample Collapsible Menu" ></CollapsibleMenu>
</CollapsibleMenu>,
<CollapsibleMenu name="Sample Collapsible Menu" >
    <MenuItem>Example Menu Item</MenuItem>
    <CollapsibleMenu name="Sample Collapsible Menu" >
        <CollapsibleMenu>
            <CollapsibleMenu>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
                <MenuItem>Example Menu Item</MenuItem>
            </CollapsibleMenu>
            <MenuItem>Example Menu Item</MenuItem>
        </CollapsibleMenu>
        <CollapsibleMenu>
            <CollapsibleMenu>
                <CollapsibleMenu>
                    <MenuItem>Example Menu Item</MenuItem>
                </CollapsibleMenu>
                <MenuItem>Example Menu Item</MenuItem>
            </CollapsibleMenu>
            <MenuItem>Example Menu Item</MenuItem>
        </CollapsibleMenu>
        <MenuItem>Example Menu Item</MenuItem>
    </CollapsibleMenu>
    <CollapsibleMenu name="Sample Collapsible Menu" ></CollapsibleMenu>
</CollapsibleMenu>
];