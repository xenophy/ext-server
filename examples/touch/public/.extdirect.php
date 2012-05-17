<?php
/**
 * Ext.Direct
 */
class extdirect extends xFrameworkPX_Controller_ExtDirect
{
    public $direct = array(
        'namespace' => 'AM',
        'descriptor' => 'Ext.REMOTING_API'
    ); 
    public $modules = array(
        'users' => array( 'conn' => 'default' )
    );
}

