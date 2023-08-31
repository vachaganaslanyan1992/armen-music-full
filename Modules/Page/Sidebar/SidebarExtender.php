<?php

namespace Modules\Page\Sidebar;

use Maatwebsite\Sidebar\Item;
use Maatwebsite\Sidebar\Menu;
use Maatwebsite\Sidebar\Group;
use Modules\Admin\Sidebar\BaseSidebarExtender;

class SidebarExtender extends BaseSidebarExtender
{
    public function extend(Menu $menu)
    {
        $menu->group(trans('admin::sidebar.content'), function (Group $group) {
            $group->item(trans('page::sidebar.pages'), function (Item $item) {
                $item->icon('fa fa-file');
                $item->weight(25);
                $item->route('admin.pages.index');
                $item->authorize(
                    $this->auth->hasAccess('admin.pages.index')
                );
            });
        });
    }
}
