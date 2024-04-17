import { useState } from "react";

export default function Toolbar({ onAdd, onDelete, onFavorite }) {



    return (
        <div id="toolbar">
            <i onClick={onAdd} class="glyphicon glyphicon-plus"></i>
            {/* voeg "starred" class toe voor actieve status */}
            <i class="glyphicon glyphicon-star"></i>
            <i class="glyphicon glyphicon-remove"></i>
        </div>
    );
}