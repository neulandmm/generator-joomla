<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.%TEMPLATENAME%
 *
 * @copyright   Copyright (C) 2014 %COPYRIGHTNAME%
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;

$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$user = JFactory::getUser();
$this->language = $doc->language;
$this->direction = $doc->direction;

$menu = $app->getMenu();

// Getting params from template
$params = $app->getTemplate(true)->params;

// Detecting Active Variables
$option = $app->input->getCmd('option', '');
$view = $app->input->getCmd('view', '');
$layout = $app->input->getCmd('layout', '');
$task = $app->input->getCmd('task', '');
$itemid = $app->input->getCmd('Itemid', '');
$sitename = $app->get('sitename');

// Add JavaScript Frameworks
JHtml::_('bootstrap.framework');
$doc->addScript('templates/' . $this->template . '/js/template.js');

// Add Stylesheets
$doc->addStyleSheet('templates/' . $this->template . '/css/normalize.css');
$doc->addStyleSheet('templates/' . $this->template . '/css/style.css');
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <jdoc:include type="head" />
</head>
<body<?php echo ($cur == "Home" ? ' class="home"' : '' ); ?>>
    <header>
        <nav id="metanavi"><div class="wrapper clearfix"><jdoc:include type="modules" name="meta" /></div></nav>
        <div class="wrapper">
        	<a href="<?php echo $this->baseurl ?>" class="logo"><span class="no-display">Logo</span></a>
			<nav id="mainnavi"><jdoc:include type="modules" name="navi" /></nav>
        </div>        
    </header>
    <div id="content">
        <div class="wrapper clearfix">
            <jdoc:include type="component" />
            <?php if ($this->countModules('left') || $this->countModules('right')): ?>
                <div class="left-right clearfix">
                	<div class="left"><jdoc:include type="modules" name="left" /></div>
                    <div class="right"><jdoc:include type="modules" name="right" /></div>
				</div>
            <?php endif; ?>
            <?php if ($this->countModules('main')): ?>
                <jdoc:include type="modules" name="main" />
            <?php endif; ?>
            <?php if ($this->countModules('main3-1') || $this->countModules('main3-2') || $this->countModules('main3-3')): ?>
                <div class="main3 clearfix">
                    <div class="col-1"><jdoc:include type="modules" name="main3-1" /></div>
                    <div class="col-2"><jdoc:include type="modules" name="main3-2" /></div>
                    <div class="col-3"><jdoc:include type="modules" name="main3-3" /></div>
                </div>
            <?php endif; ?>
        </div>
        <?php if ($this->countModules('main-complete')): ?>
            <jdoc:include type="modules" name="main-complete" />
        <?php endif; ?>
    </div>
    <footer>
    	<?php if ($this->countModules('footer-complete')): ?>
            <jdoc:include type="modules" name="footer-complete" />
        <?php endif; ?>
        <div class="wrapper">
            <jdoc:include type="modules" name="footer" />
        </div>
    </footer>
</body>
</html>
