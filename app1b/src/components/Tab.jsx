import React from 'react'

function Tab() {
    return (
        <div>
<br /><br />
            <nav class="nav nav-pills flex-column flex-sm-row">
                <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
            </nav>
<br /><br />
        </div>
    )
}

export default Tab